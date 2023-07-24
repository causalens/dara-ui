import { faHandSpock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandSpock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandSpock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandSpock} {...props} />;
};

export default HandSpock;
