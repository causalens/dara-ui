import { faSignal5 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Signal5 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Signal5 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignal5} {...props} />;
};

export default Signal5;
