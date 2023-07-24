import { faLaugh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Laugh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Laugh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaugh} {...props} />;
};

export default Laugh;
