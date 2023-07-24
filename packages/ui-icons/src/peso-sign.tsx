import { faPesoSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PesoSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PesoSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPesoSign} {...props} />;
};

export default PesoSign;
