import { faSliders } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sliders icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sliders = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSliders} {...props} />;
};

export default Sliders;
