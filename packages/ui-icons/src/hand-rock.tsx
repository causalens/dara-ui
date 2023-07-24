import { faHandRock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandRock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandRock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandRock} {...props} />;
};

export default HandRock;
