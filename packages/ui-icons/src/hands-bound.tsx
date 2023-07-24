import { faHandsBound } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsBound icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsBound = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsBound} {...props} />;
};

export default HandsBound;
