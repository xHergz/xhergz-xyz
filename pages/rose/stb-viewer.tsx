import React from "react";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";

export type StbViewerProps = {};

class BinaryReader {
  private index: number;
  private buffer: Buffer;

  constructor(buffer: Buffer) {
    this.index = 0;
    this.buffer = buffer;
  }

  get currentIndex() {
    return this.index;
  }

  read_u16() {
    const value = this.buffer.readUInt16LE(this.index);
    this.index += 2;
    return value;
  }

  read_u32() {
    const value = this.buffer.readUInt32LE(this.index);
    this.index += 4;
    return value;
  }

  read_str(start: number, end: number, encoding: BufferEncoding = "utf8") {
    this.index += end - start;
    return this.buffer.toString(encoding, start, end);
  }

  read_str_u16(encoding: BufferEncoding = "utf8") {
    const length = this.read_u16();
    this.index += length;
    return this.buffer.toString(encoding, this.index - length, this.index);
  }

  seek(offset: number) {
    this.index = offset;
  }

  skip(offset: number) {
    this.index += offset;
  }
}

type StbInfo = {
  identifer: string;
  offset: number;
  rowCount: number;
  colCount: number;
};

type ColumnData = {
  name: string;
  start: number;
  end: number;
  length: number;
};

const StbViewer: React.FunctionComponent<StbViewerProps> = (
  props: StbViewerProps
): JSX.Element => {
  const [stbInfo, setStbInfo] = React.useState<StbInfo | null>(null);
  const [headers, setHeaders] = React.useState<string[]>([]);
  const [rowData, setRowData] = React.useState<string[][]>([]);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (!event.target) {
        return;
      }
      const fileContent = event.target.result as ArrayBuffer;
      const buffer = Buffer.from(fileContent);

      const reader = new BinaryReader(buffer);
      const identifer = reader.read_str(0, 4);
      const offset = reader.read_u32();
      const rowCount = reader.read_u32();
      const colCount = reader.read_u32();

      setStbInfo({ identifer, offset, rowCount, colCount });

      // Skip the root column width and column widths
      reader.skip(4 + 2 + colCount * 2);

      const columns: string[] = [];
      for (let i = 0; i < colCount; i++) {
        const name = reader.read_str_u16();
        columns.push(name);
      }
      setHeaders(columns);

      // Skip unknown string
      const unknown = reader.read_str_u16();

      const rows: string[][] = [];
      for (let i = 0; i < rowCount; i++) {
        const row: string[] = [];
        const value = reader.read_str_u16();
        console.log(i, value);
        row.push(value);
        rows.push(row);
      }

      // Skip offset
      console.log(offset, reader.currentIndex, buffer.length);
      reader.seek(offset);

      try {
        for (let i = 0; i < rowCount; i++) {
          for (let j = 0; j < colCount - 1; j++) {
            const str = reader.read_str_u16();
            rows[i].push(str);
          }
        }
      } catch (e) {
        console.error(e);
      }

      console.log(rows);
      setRowData(rows);

      /*const identifer = buffer.toString("utf8", 0, 4);
      const offset = buffer.readUInt32LE(4);
      const rowCount = buffer.readUInt32LE(8);
      const colCount = buffer.readUInt32LE(12);

      setStbInfo({ identifer, offset, rowCount, colCount });

      // Skip the root column width and column widths
      const unusedOffset = 16 + 2 + colCount * 2;

      const columns: ColumnData[] = [];
      let nameIndex = unusedOffset;
      for (let i = 0; i < colCount; i++) {
        const strLength = buffer.readUInt16LE(nameIndex);
        const strStart = nameIndex + 2;
        const strEnd = strStart + strLength;
        console.log(strLength, strStart, strEnd);
        const name = buffer.toString("utf16le", strStart, strEnd);
        columns.push({ name, start: strStart, end: strEnd, length: strLength });
        nameIndex = strEnd;
      }

      console.log(identifer, offset, rowCount, colCount, columns);
      setColumnData(columns);*/
    };
    reader.readAsArrayBuffer(file);
  };
  return (
    <PageWrapper>
      <input type="file" accept=".stb" onChange={handleFileChange} />
      <p>Identifier: {stbInfo?.identifer}</p>
      <p>Offset: {stbInfo?.offset}</p>
      <p>Row Count: {stbInfo?.rowCount}</p>
      <p>Col Count: {stbInfo?.colCount}</p>
      <table style={{ border: "1px black solid" }}>
        <thead>
          <tr style={{ position: "sticky", top: 0, background: "white" }}>
            <th key="Row#" style={{ border: "1px black solid" }}>
              Row #
            </th>
            {headers.map((header) => (
              <th key={header} style={{ border: "1px black solid" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td key={`-1-${rowIndex}`} style={{ border: "1px black solid" }}>
                {rowIndex}
              </td>
              {row.map((column, colIndex) => (
                <td
                  key={`${headers[colIndex]}-${rowIndex}`}
                  style={{ border: "1px black solid" }}
                >
                  {column}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </PageWrapper>
  );
};

export default StbViewer;
