import { faVoteYea } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VoteYea icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VoteYea = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVoteYea} {...props} />;
};

export default VoteYea;
