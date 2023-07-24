import { faVirusCovid } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VirusCovid icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VirusCovid = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVirusCovid} {...props} />;
};

export default VirusCovid;
