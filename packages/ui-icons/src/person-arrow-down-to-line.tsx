import { faPersonArrowDownToLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonArrowDownToLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonArrowDownToLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonArrowDownToLine} {...props} />;
};

export default PersonArrowDownToLine;
