import { faMarsAndVenus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsAndVenus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsAndVenus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsAndVenus} {...props} />;
};

export default MarsAndVenus;
