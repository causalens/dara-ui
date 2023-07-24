import { faPodcast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Podcast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Podcast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPodcast} {...props} />;
};

export default Podcast;
