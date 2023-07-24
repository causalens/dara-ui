import { faMicroscope } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Microscope icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Microscope = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicroscope} {...props} />;
};

export default Microscope;
