import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Paintbrush icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Paintbrush = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaintbrush} {...props} />;
};

export default Paintbrush;
