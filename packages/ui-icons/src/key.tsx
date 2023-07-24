import { faKey } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Key icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Key = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKey} {...props} />;
};

export default Key;
