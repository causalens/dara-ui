import { faFastBackward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FastBackward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FastBackward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFastBackward} {...props} />;
};

export default FastBackward;
