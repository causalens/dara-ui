import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareEnvelope icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareEnvelope = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareEnvelope} {...props} />;
};

export default SquareEnvelope;
