import React from 'react';
import { map, merge, get, isArray, isObject } from 'lodash';
import classNames from 'classnames';

import { oneLineItemStyle } from '../utils';
import { BaseComponentProps } from '../ItemsType';
import YForm from '..';
import { YFormItemProps } from '../Items';

export interface YFormOneLineComponentProps extends BaseComponentProps {
	oneLineStyle?: (string | number)[];
}

export interface YFormOneLineItems {
	style: React.CSSProperties[];
}
export interface YFormOneLineProps {
	componentProps?: YFormOneLineComponentProps;
	className?: string;
	style?: React.CSSProperties;
	items?: (p: YFormOneLineItems) => YFormItemProps['children'];
}

export const oneLineModify = (
	fProps: YFormItemProps,
	cProps: YFormOneLineProps
): [YFormItemProps, YFormOneLineProps] => {
	const _fProps = { ...fProps, className: classNames(fProps.className, 'mb0') };
	const _cProps = { ...cProps };
	return [_fProps, _cProps];
};

export default (props: YFormOneLineProps) => {
	const { componentProps = {}, items, ...rest } = props;
	const { oneLineStyle, ..._componentRest } = componentProps as YFormOneLineComponentProps;

	const styleObj = oneLineItemStyle(oneLineStyle || []);
	const _dataSource = items && items({ style: styleObj });
	let _childrenDataSource = _dataSource;
	if (isArray(_dataSource)) {
		_childrenDataSource = map(_dataSource, (item, index: number) => {
			if (!item) return;
			const _style = get(styleObj, index, {});
			if (isObject(item)) {
				return merge(
					{},
					{
						plugins: { labelLayout: false, noLabelLayout: false },
						style: { display: 'inline-block', ..._style },
					},
					{ ...item, className: classNames('dib', get(item, 'className')) }
				);
			}
		}).filter(x => x);
	}

	return (
		<div className="one-line" {..._componentRest}>
			<YForm.Items {...rest}>{_childrenDataSource}</YForm.Items>
		</div>
	);
};
