import { faSkiingNordic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SkiingNordic icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SkiingNordic = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSkiingNordic} {...props} />;
};

export default SkiingNordic;
