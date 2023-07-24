import { faStore } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Store icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Store = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStore} {...props} />;
};

export default Store;
