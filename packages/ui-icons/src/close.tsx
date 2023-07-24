import { faClose } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Close icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Close = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClose} {...props} />;
};

export default Close;
