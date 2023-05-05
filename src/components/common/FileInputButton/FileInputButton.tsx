import { useRef } from "react";

import Button, { ButtonProps } from "../Button";

export type FileInputButtonProps = ButtonProps & {
  onFileSelected: (files: FileList) => void;
};

const FileInputButton: React.FunctionComponent<FileInputButtonProps> = (
  props: FileInputButtonProps
): JSX.Element => {
  const fileDialog = useRef<HTMLInputElement | null>(null);

  const openFileDialog = (): void => {
    if (fileDialog.current) {
      fileDialog.current.click();
    }
  };

  const fileSelected = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      props.onFileSelected(event.currentTarget.files);
      if (fileDialog.current) {
        // Clears the value of the input. Some browsers (Chromium based for sure) do not fire the onChange event if the value is the same.
        // Ref: https://stackoverflow.com/a/11280864/8070411
        // Bug: https://app.shortcut.com/deveron/story/1783/farm-dog-web-upload-failed-when-one-uploads-a-file-on-the-second-upload-form-where-the-progress-bar-is-right-after-a-previous#activity-1799
        fileDialog.current.value = "";
      }
    }
  };

  return (
    <>
      <Button onClick={openFileDialog} {...props}>
        {props.children}
      </Button>
      <input
        type="file"
        multiple
        ref={fileDialog}
        className="hidden"
        onChange={fileSelected}
      />
    </>
  );
};

export default FileInputButton;
