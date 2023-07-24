import { faDropletSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DropletSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DropletSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDropletSlash} {...props} />;
};

export default DropletSlash;
