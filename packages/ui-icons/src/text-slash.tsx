import { faTextSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TextSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TextSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTextSlash} {...props} />;
};

export default TextSlash;
