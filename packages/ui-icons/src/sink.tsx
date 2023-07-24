import { faSink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSink} {...props} />;
};

export default Sink;
