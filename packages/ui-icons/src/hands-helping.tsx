import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsHelping icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsHelping = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsHelping} {...props} />;
};

export default HandsHelping;
