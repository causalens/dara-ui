import { faCertificate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Certificate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Certificate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCertificate} {...props} />;
};

export default Certificate;
