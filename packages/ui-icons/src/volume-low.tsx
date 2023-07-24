import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeLow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeLow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeLow} {...props} />;
};

export default VolumeLow;
