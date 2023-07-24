import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Lightbulb icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Lightbulb = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLightbulb} {...props} />;
};

export default Lightbulb;
