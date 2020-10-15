// @flow strict
import { connect } from 'react-redux';

import type { ComponentType } from 'react';

import { getConfigBlockIds } from '../../state';

import type { State } from '../../state/types';
import type { BlockId } from '../../constants/types';

import BlocksList from './BlocksList';

type OwnProps = {||};

type Props = {|
  blocks: Array<BlockId>,
|};

const mapStateToProps = (state: State): Props => ({
  blocks: getConfigBlockIds(state),
});

const BlocksListContainer: ComponentType<OwnProps> = connect(mapStateToProps)(
  BlocksList
);

export default BlocksListContainer;
