import { faPersonArrowUpFromLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonArrowUpFromLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonArrowUpFromLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonArrowUpFromLine} {...props} />;
};

export default PersonArrowUpFromLine;
