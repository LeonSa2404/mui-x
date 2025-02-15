import { CurveType } from '../../internals/getCurve';
import { DefaultizedProps } from '../helpers';
import { CartesianSeriesType, CommonSeriesType, DefaultizedCommonSeriesType } from './common';

export interface LineSeriesType extends CommonSeriesType, CartesianSeriesType {
  type: 'line';
  data: number[];
  stack?: string;
  area?: any;
  label?: string;
  curve?: CurveType;
}

/**
 * An object that allows to identify a single line.
 * Used for item interaction
 */
export type LineItemIdentifier = {
  type: 'line';
  seriesId: DefaultizedLineSeriesType['id'];
  /**
   * `dataIndex` can be `undefined` if the mouse is over the area and not a specific item.
   */
  dataIndex?: number;
};

export interface DefaultizedLineSeriesType
  extends DefaultizedProps<LineSeriesType, 'id'>,
    DefaultizedCommonSeriesType<number> {}
