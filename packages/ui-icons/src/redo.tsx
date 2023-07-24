import { faRedo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Redo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Redo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRedo} {...props} />;
};

export default Redo;
