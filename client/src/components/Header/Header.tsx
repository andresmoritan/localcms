import React from 'react';

import SaveButton from '../SaveButton';
import { ReactComponent as Icon } from './icon.svg';

const Header = (): JSX.Element => (
  <header className="flex w-full p-4 items-center bg-blue-600">
    <Icon className="h-8 mr-4 text-gray-100" />
    <h1 className="text-2xl text-gray-100">localcms</h1>
    <SaveButton />
  </header>
);

export default Header;
