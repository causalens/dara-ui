import { faSheetPlastic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SheetPlastic icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SheetPlastic = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSheetPlastic} {...props} />;
};

export default SheetPlastic;
