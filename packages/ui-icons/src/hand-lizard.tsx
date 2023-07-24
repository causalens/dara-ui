import { faHandLizard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandLizard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandLizard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandLizard} {...props} />;
};

export default HandLizard;
