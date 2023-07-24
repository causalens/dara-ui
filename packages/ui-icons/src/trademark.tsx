import { faTrademark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Trademark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Trademark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrademark} {...props} />;
};

export default Trademark;
