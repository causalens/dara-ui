import { faEarListen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EarListen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EarListen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEarListen} {...props} />;
};

export default EarListen;
