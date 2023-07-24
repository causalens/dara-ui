import { faKissBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * KissBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const KissBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKissBeam} {...props} />;
};

export default KissBeam;
