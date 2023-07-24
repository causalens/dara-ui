import { faMusic } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Music icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Music = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMusic} {...props} />;
};

export default Music;
