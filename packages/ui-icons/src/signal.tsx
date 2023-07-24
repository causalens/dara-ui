import { faSignal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Signal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Signal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignal} {...props} />;
};

export default Signal;
