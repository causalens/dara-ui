import { faBible } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bible icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bible = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBible} {...props} />;
};

export default Bible;
