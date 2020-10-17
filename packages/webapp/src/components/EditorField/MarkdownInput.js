// @flow strict
import React from 'react';

import type { Node } from 'react';

import type { FieldId } from '../../constants/types';

type Props = {|
  htmlId: FieldId,
  value: string,
  onFieldUpdated: (value: string) => void,
|};

const MarkdownInput = ({ htmlId, value, onFieldUpdated }: Props): Node => {
  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    onFieldUpdated(event.target.value);
  };

  return (
    <textarea
      type="text"
      className="w-full border-solid border-2 border-gray-200 p-2"
      rows="12"
      id={htmlId}
      value={value}
      onChange={handleChange}
    />
  );
};

export default MarkdownInput;
