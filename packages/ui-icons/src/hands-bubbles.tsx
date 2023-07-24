import { faHandsBubbles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsBubbles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsBubbles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsBubbles} {...props} />;
};

export default HandsBubbles;
