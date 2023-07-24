import { faShuffle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shuffle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shuffle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShuffle} {...props} />;
};

export default Shuffle;
