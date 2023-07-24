import { faBathtub } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bathtub icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bathtub = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBathtub} {...props} />;
};

export default Bathtub;
