import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandPeace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandPeace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandPeace} {...props} />;
};

export default HandPeace;
