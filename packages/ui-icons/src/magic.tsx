import { faMagic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Magic icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Magic = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagic} {...props} />;
};

export default Magic;
