import { faColonSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ColonSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ColonSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faColonSign} {...props} />;
};

export default ColonSign;
