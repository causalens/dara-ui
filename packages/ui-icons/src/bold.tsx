import { faBold } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bold icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bold = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBold} {...props} />;
};

export default Bold;
