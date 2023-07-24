import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WaveSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WaveSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWaveSquare} {...props} />;
};

export default WaveSquare;
