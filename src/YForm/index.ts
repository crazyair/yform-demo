import YForm, { Config, useFormatFieldsValue } from './Form';
import Items from './Items';
import itemsType from './ItemsType';
import { submitFormatValues, onFormatFieldsValue } from './utils';

import './index.less';

type InternalYForm = typeof YForm;
interface RefYForm extends InternalYForm {
    config: typeof Config;
    ItemsType: typeof itemsType;
    Items: typeof Items;
    useFormatFieldsValue: typeof useFormatFieldsValue;
    submitFormatValues: typeof submitFormatValues;
    onFormatFieldsValue: typeof onFormatFieldsValue;
}

const Form: RefYForm = YForm as RefYForm;

Form.ItemsType = itemsType;
Form.config = Config;
Form.Items = Items;
Form.useFormatFieldsValue = useFormatFieldsValue;
Form.submitFormatValues = submitFormatValues;
Form.onFormatFieldsValue = onFormatFieldsValue;

export default Form;
